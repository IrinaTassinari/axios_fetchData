// 1.Создайте React проект.
// 2.Установите Axios: выполните в терминале команду npm install axios.
// 3.Создайте файл компонента, например Component.js.
// 4.Импортируйте необходимые библиотеки:
// ○import axios from 'axios';
// ○import { useEffect } from 'react';
// 5.Напишите функцию компонента:
// ○Определите функциональный компонент function Component() {}.
// ○Внутри компонента, отдельно определите функцию fetchData для выполнения запроса.
// ○Используйте axios.get() для HTTP запроса и обработайте результат с .then() и ошибки с .catch().
// ○Ссылка для запроса: https://jsonplaceholder.typicode.com/posts
// ○Используйте useEffect для вызова fetchData при монтировании компонента.
// 6.Верните JSX из вашего компонента, например <div className="component"></div>.
// 7.Экспортируйте компонент: export default Component.
// 8.Импортируйте его в App.js
// 9.Запустите приложение с помощью npm start.
// 10.Проверьте результат в консоли браузера.

// Доработаем компонент, который создали в ходе выполнения 1 задания:
// 1.Откройте файл компонента Component.js.
// 2.Добавьте импорт хука useState. 
// 3.Добавьте состояние для хранения данных.
// 4.Модифицируйте функцию fetchData для установки данных в состояние.

// 5.Отобразите полученные данные при помощи .map() в функции возвращаемого JSX.
// 6.Запустите приложение и посмотрите, как данные загружаются и отображаются.
// 7.Проверка работы: Убедитесь, что все элементы корректно отображаются и вывод ошибок отсутствует в консоли.

import axios from 'axios';
import { useEffect, useState } from 'react';

function Component(){
    const[posts,setPosts] = useState([])

    const fetchData = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setPosts(response.data)
            console.log('получаем данные:', response.data)
        }) 
        .catch(error => console.error('ошибка сетевого запроса:' ,error)) 
    }

    useEffect(() => {
        fetchData()
    },[])

    // setPosts(() => {return response.data} ) // same same
   // setPosts(response.data) //коротк вар-т, если предыдущ вар-т не влияет на последующ  вар-т 

    return(
      <div className="component">
            <p>Результат сетевого запроса в consol</p>
            
            <h3>Список постов:</h3>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
               </div>

            ))}
        </div>
    )
}
export default Component;