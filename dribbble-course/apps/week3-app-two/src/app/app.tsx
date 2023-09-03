import { Ui, Stack, Header } from '@dribbble-course/ui';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  return (
    <div>
      <Header title="Week3 App Two" />
      <section className={styles['intro']}>
        <div className={styles['container']}>
          <p className="intro__text">lorem ipsum sit</p>
          <h1 className="intro__title">
            Responsive layouts don’t
            <br />
            have to be a struggle
          </h1>
        </div>
      </section>
      <nav className={styles['breadcrumbs']}>
        <div className={styles['container']}>
          <Stack orientation="row" spacing={2} className="intro__text">
            <a className={styles['breadcrumbs__link']} href="#">
              Home
            </a>
            <a className={styles['breadcrumbs__link']}>/</a>
          </Stack>
        </div>
      </nav>

      <section className={styles['section-two']}>
        <div className={styles['container']}>
          <h2
            className={`${styles['section-title']} ${styles['section-title--dark']}`}
          >
            Quality Designs
          </h2>
          <div className={styles['row']}>
            <div className={styles['col']}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
                felis. Sociis natoque penatibus et magnis dis.{' '}
              </p>
            </div>
            <div className={styles['col']}>
              <p>
                Felis donec et odio pellentesque diam volutpat. Aliquam purus
                sit amet luctus venenatis. Turpis in eu mi bibendum neque
                egestas congue quisque egestas. Pellentesque sit amet porttitor
                eget dolor morbi non.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['section-three']}>
        <div className={`${styles['container']} ${styles['row']}`}>
          <div className={styles['col']}>
            <h2 className={styles['section-title']}>Made custom for you</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </section>

      <section className={styles['section-four']}>
        <div className={`${styles['container']} ${styles['row']}`}>
          <div className={styles['col']}>
            <h2 className={styles['section-title']}>Created with care</h2>
            <p>
              Felis donec et odio pellentesque diam volutpat. Aliquam purus sit
              amet luctus venenatis. Turpis in eu mi bibendum neque egestas
              congue quisque egestas. Pellentesque sit amet porttitor eget dolor
              morbi non.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
